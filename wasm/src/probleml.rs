use rand;
use rand::prelude::*;
use rand_chacha::ChaCha8Rng;

pub fn generate_testcase_l(caseid: u64) -> Vec<(i32, i32)> {
    let mut rng = ChaCha8Rng::seed_from_u64(caseid);
    let mut ret = Vec::new();
    for _ in 0..100 {
        ret.push((rng.gen_range(1..100001), rng.gen_range(1..100001)));
    }
    ret.push((0, 0));
    ret
}

fn modelans_l(testcase: &Vec<(i32, i32)>) -> Vec<i64> {
    let mut ret = Vec::new();
    for (x, y) in testcase {
        if *x == 0 && *y == 0 {
            break;
        }
        ret.push(*x as i64 * *y as i64);
    }
    ret
}

pub fn validate_testcase_l(testid: u64, ans: &str) -> bool {
    let testcase = generate_testcase_l(testid);
    let modelans = modelans_l(&testcase);
    let mut vans = Vec::new();
    for line in ans.lines() {
        vans.push(line.parse::<i64>().unwrap());
    }
    vans == modelans
}
