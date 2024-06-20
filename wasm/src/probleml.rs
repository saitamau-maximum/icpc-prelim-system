use rand;
use rand::prelude::*;
use rand_chacha::ChaCha8Rng;

pub fn generate(caseid: u64) -> Vec<(i32, i32)> {
    let mut rng = ChaCha8Rng::seed_from_u64(caseid);
    let mut ret = Vec::new();
    for _ in 0..100 {
        ret.push((rng.gen_range(1..100001), rng.gen_range(1..100001)));
    }
    ret.push((0, 0));
    ret
}

fn modelans(testcase: &Vec<(i32, i32)>) -> Vec<i64> {
    let mut ret = Vec::new();
    for (x, y) in testcase {
        if *x == 0 && *y == 0 {
            break;
        }
        ret.push(*x as i64 * *y as i64);
    }
    ret
}

pub fn validate(testid: u64, ans: &str) -> bool {
    let testcase = generate(testid);
    let modelans = modelans(&testcase);
    let mut vans = Vec::new();
    for line in ans.lines() {
        let val = line.parse::<i64>();
        if val.is_err() {
            return false;
        }
        vans.push(val.unwrap());
    }
    vans == modelans
}
